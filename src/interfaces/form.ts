import { User } from '@/interfaces/user';

export interface State {
  ok: boolean;
  error: string;
  data: User | null;
}
