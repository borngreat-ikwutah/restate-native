/*
 * This file is part of the "utils" module.
 * It exports utility functions for various purposes.
 * @module utils
 * @author Borngreat-Ikwutah
 */

export function getGreetingBasedOnTime(date: Date): string {
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else if (hour >= 18 || hour < 5) {
    return "Good Evening";
  } else {
    return "Good Day";
  }
}
