import React, { FC } from 'react';

import { RouteModel } from 'types';
import { Authorized, Unauthorized } from 'components';

const RouteWithSubRoutes: FC<RouteModel> = (route: RouteModel) => (
  <>
    {/* TODO; Handle Share page here */}
    {route.authorized ? (
      <Authorized route={route} />
    ) : (
      <Unauthorized route={route} />
    )}
  </>
);

export default RouteWithSubRoutes;
