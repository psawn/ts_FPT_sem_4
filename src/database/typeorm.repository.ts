import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { PaginationConstants } from 'src/common/constants/pagination.constant';
import { Repository } from 'typeorm';

export class TypeORMRepository<T> extends Repository<T> {
  async paginate({ page, limit }: IPaginationOptions, query: any) {
    const options = {
      page: page || PaginationConstants.DEFAULT_PAGE,
      limit: limit || PaginationConstants.DEFAULT_LIMIT_ITEM,
    };

    if (query) {
      return await paginate<T>(query, options);
    }

    return null;
  }
}
