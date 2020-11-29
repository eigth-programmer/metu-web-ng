import {IUser} from '../../../../auth/entities/user/domain/IUser';

export interface IReviewOut {
  id?: string,
  comment: string,
  score: number,
  user: string
}
