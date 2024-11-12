"use client"
// src/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "awc9cabz", // Replace with your actual project ID
  dataset: "production", // Or your specific dataset
  apiVersion: '2023-11-03', // Today's date or the preferred API version
  useCdn: true,
});

