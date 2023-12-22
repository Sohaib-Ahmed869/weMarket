import React   from 'react'

import Layout3 from '../pages/Layout3/layout3';
import PrivacyPage from '../privacy-policy/page';
const authProtectedRoutes = [

    { path: "/", component: <Layout3/> },
    { path: "/privacy-policy", component: <PrivacyPage/> },

]

export default authProtectedRoutes;