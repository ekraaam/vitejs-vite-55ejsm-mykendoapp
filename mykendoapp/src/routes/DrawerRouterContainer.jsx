import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import {  menuIcon, gridIcon } from '@progress/kendo-svg-icons';
import { formElementIcon } from '@progress/kendo-svg-icons';
const items = [{
  text: 'Grid',
  svgIcon: gridIcon,
  selected: true,
  route: '/'
}, {
  separator: true
}, {
  text: 'Form',
  svgIcon: formElementIcon,
  route: '/FormComponent'
}, {
  text: 'Tile layout',
  svgIcon: gridIcon,
  route: '/Tilelayout'
}, {
  separator: true
}];
const DrawerRouterContainer = props => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(true);
  const [selected, setSelected] = React.useState(items.findIndex(x => x.selected === true));
  const handleClick = () => {
    setExpanded(!expanded);
  };
  const onSelect = e => {
    navigate(e.itemTarget.props.route);
    setSelected(e.itemIndex);
    //setExpanded(!expanded);
  };
  return <div>
      <div className="custom-toolbar">
        <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
        <span className="mail-box">Mail Box</span>
      </div>
      <Drawer expanded={expanded} position={'start'} mode={'push'} mini={true} items={items.map((item, index) => ({
      ...item,
      selected: index === selected
    }))} onSelect={onSelect}>
        <DrawerContent>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>;
};
export default DrawerRouterContainer;