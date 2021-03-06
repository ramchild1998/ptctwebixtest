import {JetView} from "webix-jet";
import MenuView from "views/menu";

export default class TopView extends JetView {
	config(){
		return {
			rows:[
				{
					view: "toolbar", height:60,
					elements:[
						{ width:12 },
						{ css:"logo" },
					]
				},
				{
					cols:[
						MenuView, { $subview:true }
					]
				},
				{
					template:"<p class='title'>PTCT Assessment Test - Ramadiansyah. All rights reserved &copy</p>",
					height:40, css:"footer"
				}
			]
		};
	}
}
