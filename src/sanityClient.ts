"use client"
// src/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "quaxgg3z", // Replace with your actual project ID
  dataset: "production", // Or your specific dataset
  apiVersion: '2023-11-03', // Today's date or the preferred API version
  useCdn: false, 
});

