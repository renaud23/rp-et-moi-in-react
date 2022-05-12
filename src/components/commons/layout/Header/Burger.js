import { useCallback } from "react";
import { usePopper } from "../../Popper";
import MenuItem from "./Menu/MenuItem";
import Separator from "./Menu/Separator";
import Menu from "./Menu";

function Burger() {
  const { open, Popper, close } = usePopper();

  const onTouchEnd = useCallback(
    function (e) {
      e.nativeEvent.stopImmediatePropagation();
      close();
    },
    [close]
  );

  return (
    <div className="burger" onTouchEnd={open}>
      Menu
      <Popper id="modal-searchbar" className="searchbar-mobile-popper">
        <Menu mediaType="mobile">
          <MenuItem
            title="C'est utile"
            subTitle="des chiffres pour construire demain"
            link="/home"
            onTouchEnd={onTouchEnd}
          />
          <Separator />
          <MenuItem
            title="c'est simple"
            subTitle="comment ça marche"
            link="/home"
            onTouchEnd={onTouchEnd}
          />
          <Separator />
          <MenuItem
            title="c'est sûr"
            subTitle="vos information sont protégées"
            link="/home"
            onTouchEnd={onTouchEnd}
          />
          <Separator />
          <MenuItem
            title="vos questions"
            subTitle=""
            link="/home"
            onTouchEnd={onTouchEnd}
          />
        </Menu>
      </Popper>
    </div>
  );
}

export default Burger;
