/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string; // Declara aquí todas las variables de entorno que usas
  // Puedes agregar más variables si las necesitas
  // readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
