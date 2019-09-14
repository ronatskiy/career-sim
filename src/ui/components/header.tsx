import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import useGameplayStore from "../stores/hooks/use-gameplay-store";

function Header() {
	const [isOpen, toggleOpen] = useState(false);
	const gameplay = useGameplayStore();

	return (
		<Navbar color="dark" dark light expand="md">
			<NavbarBrand href="">Career Sim</NavbarBrand>
			<NavbarToggler
				onClick={() => {
					toggleOpen(!isOpen);
				}}
			/>
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Опции
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem onClick={gameplay.onNewGame}>Новая игра</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Выход</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default Header;
