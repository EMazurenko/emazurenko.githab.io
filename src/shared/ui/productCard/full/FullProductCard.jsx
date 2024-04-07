import React from 'react';
import { CartButton } from '../../cartButton/CartButton';
import { ImageList } from './imageList/ImageList';
import s from './FullProductCard.module.scss';
import photo_stub from '../stub.png';
import { priceFormatter } from '../../../utils/FormatUtils';

export const FullProductCard = ({
  category = 'Категория',
  title = 'Продукт',
  description = 'Описание',
  price = 99.99,
  photo_urls = [photo_stub, photo_stub],
  initCountItems = 0,
}) => {
  return (
    <div className={s.root}>
      <div className={s.card_header}>
        <div>
          <ImageList images={photo_urls} />
        </div>
        <div className={s.info_block}>
          <div className={s.cart_panel}>
            <span className={s.price}>{priceFormatter.format(price)}</span>
            <CartButton size="large" initCountItems={initCountItems} />
          </div>
          <p className={s.category}>{category}</p>
          <p className={s.title}>{title}</p>
        </div>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
};
