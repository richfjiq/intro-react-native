import { useEffect, useState } from 'react';

import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getUsers = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page,
      },
    });

    setUsers(resp.data.data);
  };

  const nextPage = () => {
    if (users.length === 0) return;
    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return {
    users,
    page,
    nextPage,
    previousPage,
  };
};
