// assets

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
const icons = {
    gavel: <FontAwesomeIcon icon="fa-solid fa-gavel" size="lg"/>
};

// ==============================|| MENU ITEMS - Cases ||============================== //

const cases = {
    id: 'group-cases',
    title: 'Cases Area',
    type: 'group',
    children: [
        {
            id: 'cases',
            title: 'Cases',
            type: 'item',
            url: '/cases',
            icon: icons.gavel,
            breadcrumbs: false
        },
        {
            id: 'casesTypes',
            title: 'Cases Types',
            type: 'item',
            url: '/cases/types',
            icon: icons.gavel,
            breadcrumbs: false
        }
    ]
};

export default cases;
