"use client"
// src/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: "5ngontx0", // Replace with your actual project ID
  dataset: "production", // Or your specific dataset
  apiVersion: '2023-11-03', // Today's date or the preferred API version
  useCdn: false, 
});

