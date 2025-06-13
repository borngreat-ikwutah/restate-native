import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

import * as Linking from "expo-linking";

export const appwriteConfig = {
  packageName: "com.borngreat.restate",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint!)
  .setProject(appwriteConfig.projectId!)
  .setPlatform(appwriteConfig.packageName);


export const avatars = new Avatars(client);
export const account = new Account(client);  


export async function Login() {
    try {
        const redirectUrl = Linking.createURL("/");

        const response = account.createOAuth2Token(OAuthProvider.Google, redirectUrl);

        if(!response) {
            throw new Error("Failed to Login");
        }

        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUrl
        )

        if(browserResult.type !== "success") {
            throw new Error("Authentication failed");
        }

        const url = new URL(browserResult.url);

        // Get the client secret from the app
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString(); 

        if(!secret || !userId) {
            throw new Error("Invalid response from authentication");
        }

        const session = await account.createSession(userId, secret);

        if(!session) {
            throw new Error("Failed to create a  session");
        }

        return {
            session,
            created: true
        }
    } catch (error) {
        console.error("Login failed:", error);

        return {
            session: null,
            created: false,
            error: error instanceof Error ? error.message : "An unknown error occurred"
        }
    }
}


export async function LogOut() {
    try {
        await account.deleteSession("current");
        return {
            success: true,
            message: "Logged out successfully"
        };
    } catch (error) {
        console.error("Logout failed:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unknown error occurred"
        };
    }
}

export async function GetUser() {
     try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatars.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
