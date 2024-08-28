import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import ItemList from 'flarum/common/utils/ItemList';

app.initializers.add('foskym/flarum-info-item-sort', () => {
  extend(UserCard.prototype, 'infoItems', function (items) {
    if (items.has('badges')) items.setPriority('badges', -10);
  });
});
