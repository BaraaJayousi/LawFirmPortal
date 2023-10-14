// assets
import { SolutionOutlined } from '@ant-design/icons';

// icons
const icons = {
    SolutionOutlined
};

// ==============================|| MENU ITEMS - CUSTOMERS ||============================== //

const customers = {
id: 'group-customers',
title: 'Customers Area',
type: 'group',
children: [
{
    id: 'customers',
    title: 'Customers',
    type: 'item',
    url: '/customers',
    icon: icons.SolutionOutlined,
    breadcrumbs: false,
},
{
    id: 'customersTypes',
    title: 'Customers Types',
    type: 'item',
    url: '/customers/types',
    icon: icons.SolutionOutlined,
    breadcrumbs: false,
},
]
};

export default customers;
