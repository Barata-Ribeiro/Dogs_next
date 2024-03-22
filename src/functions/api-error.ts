import { State } from '@/interfaces/form';

export default function apiError(error: unknown): State {
  console.error(error);
  if (error instanceof Error)
    return {
      ok: false,
      error: error.message,
      data: null,
    };

  return {
    ok: false,
    error: 'Erro desconhecido. ' + error,
    data: null,
  };
}
