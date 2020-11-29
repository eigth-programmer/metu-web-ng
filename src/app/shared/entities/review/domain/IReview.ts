import {IUser} from '../../../../auth/entities/user/domain/IUser';

export interface IReview {
  id: string,
  comment: string,
  score: number,
  user: IUser
}
