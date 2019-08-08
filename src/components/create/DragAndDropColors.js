import React from 'react';
import styles from '../../style/createPaletteStyle';
import { withStyles } from '@material-ui/core/styles';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const SortableItem = SortableElement(
  ({value: {name, color}, classes, deleteColor}) =>
    <div className={classes.dragAndDropElm} style={{ background: `${color}`}}>
      <div className={classes.dragAndDropElmName}>{name}</div>
      <IconButton aria-label="delete" className={classes.dragAndDropElmBtn} onClick={() => deleteColor(name)}>
        <DeleteIcon/>
      </IconButton>
    </div>
);

const SortableList = SortableContainer(({classes, items, deleteColor}) => {
  return (
      <div className={classes.dragDropList}>
        {items.map((value, index) => (
          <SortableItem key={value.name} index={index} deleteColor={deleteColor} value={value} classes={classes}/>
        ))}
      </div>
  );
});


const DragAndDropColors = ({classes, colors, setColors}) => {

  const onSortEnd = ({oldIndex, newIndex}) => {
    const movedItem = colors.find((item, index) => index === oldIndex);
    const remainingItems = colors.filter((item, index) => index !== oldIndex);

    const reorderedItems = [
      ...remainingItems.slice(0, newIndex),
      movedItem,
      ...remainingItems.slice(newIndex)
    ];

    setColors(reorderedItems)
  };

  const deleteColor = (name) => {
    setColors(colors.filter(color => color.name !== name));
  };

  return (
    <SortableList items={colors} deleteColor={deleteColor} classes={classes} pressDelay={200} onSortEnd={onSortEnd} axis={'xy'}/>
  );
};

export default withStyles(styles)(DragAndDropColors);
