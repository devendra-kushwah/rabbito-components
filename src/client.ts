"use client";

// Client entrypoint for Next app-dir consumers.
// Importing from 'rabbito-component/client' ensures Next treats the module as a Client Component.

export * from './components';
export { default as MainLayout } from './components/MainLayout';

// You can add client-only helpers or wrappers here in future.
