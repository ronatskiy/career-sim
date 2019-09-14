import React, { useState } from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import useGameplayStore from "../../stores/hooks/use-gameplay-store";
import "./main-menu.scss";

function MenuDialog({ isOpen, onToggle }: { isOpen: boolean; onToggle(): void }) {
	const gameplay = useGameplayStore();

	return (
		<Modal isOpen={isOpen} toggle={onToggle} backdrop>
			<ModalBody>
				<div className="main-menu">
					<Button className="main-menu__item" onClick={gameplay.onNewGame}>
						Новая игра
					</Button>
					<Button className="main-menu__item">Выход</Button>
				</div>
			</ModalBody>
		</Modal>
	);
}

function MainMenuButton() {
	const [isDialogOpen, toggleDialog] = useState(false);
	const handleToggle = () => {
		toggleDialog(!isDialogOpen);
	};

	return (
		<>
			<MenuIcon onClick={handleToggle} />
			<MenuDialog isOpen={isDialogOpen} onToggle={handleToggle} />
		</>
	);
}

export default MainMenuButton;
