import React from 'react';
import { createBoard } from '@wixc3/react-board';
import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';

export default createBoard({
  name: 'New Board',
  Board: () => (
    <div>
      <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
      
    </div>
  ),
  isSnippet: true
});
