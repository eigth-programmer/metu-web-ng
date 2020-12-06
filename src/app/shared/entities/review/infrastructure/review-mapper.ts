import {IReview} from '../domain/IReview';

export class ReviewMapper {
  mapTo(entry: any): IReview{
    const {
      id,
      comment,
      score,
      user
    } = entry;

    return {
      id: id,
      comment: comment,
      score: score,
      user: user
    };
  }
}
