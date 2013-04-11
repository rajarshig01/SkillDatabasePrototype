sap.ui.jsview("skilldatabaseprototype.SkillDatabasePrototype", {

	getControllerName : function() {
		return "skilldatabaseprototype.SkillDatabasePrototype";
	},

	createContent : function(oController) {

		// Team Table

		var oTable = new sap.ui.table.DataTable({
			// title : "Clients",
			width : "auto",
			visibleRowCount : 5,
			selectionMode : sap.ui.table.SelectionMode.Single,
			editable : false,
			ShowHorizontalToolbar : true

		});

		// Team column
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Team"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"team"),
			sortProperty : "team",
			filterProperty : "team",
			width : "auto"
		}));
		// Leading Manager
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Leading Manager"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"leading"),
			sortProperty : "leading",
			filterProperty : "leading",
			width : "auto"
		}));
		// Other Manager(s)
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Other Manager(s)"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"other"),
			sortProperty : "other",
			filterProperty : "other",
			width : "auto"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Heads"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"heads"),
			sortProperty : "heads",
			filterProperty : "heads",
			width : "auto"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Last Update"
			}),
			template : new sap.ui.commons.TextField().bindProperty("value",
					"update"),
			sortProperty : "update",
			filterProperty : "update",
			width : "auto"
		}));
		// Test data Teams
		var teamData = [ {
			team : "Dealer Business Management Bangalore",
			leading : "JITAN",
			other : "none",
			heads : "10",
			update : "less than 1 month ago"
		}, {
			team : "Sample Team 2",
			leading : "Sample Manager 2",
			other : "none",
			heads : "15",
			update : "less than 3 months ago"
		}, {
			team : "Sample Team 3",
			leading : "Sample Manager 3",
			other : "none",
			heads : "12",
			update : "more than 1 month ago"
		} ];

		// Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(skillData);
		// Skill Data
		var skillData = {
			nodes : [ {
				skill : "Product",

				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
				nodes : [ {
					skill : "SAP Solution Composer",
					src : "Images/Archive_Icon.png",
					none : "-",
					basic : "-",
					proficient : "-",
					expert : "-",
					total : "-",
                    allowAdd: false
				} ]
			}, {
				skill : "Technical",
				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
				nodes : [ {
					skill : "HANA",
					src : "Images/Archive_Icon.png",
					none : "-",
					basic : "-",
					proficient : "-",
					expert : "-",
					total : "-"
				} ]
			}, {
				skill : "Process",
				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
				nodes : [ {
					skill : "Customer Engagement",
					src : "Images/Archive_Icon.png",
					none : "-",
					basic : "-",
					proficient : "-",
					expert : "-",
					total : "-"
				} ]
			}

			]
		};
		var oProductModel = new sap.ui.model.json.JSONModel();
		var oProductData = {
			nodes : [ {
				skill : "Product",

				nodes : [ {
					skill : "SAP Solution Composer"

				} ]
			} ]
		};
		oProductModel.setData(oProductData);
		var oTechnicalModel = new sap.ui.model.json.JSONModel();
		var TechnicalData = {
			skill : "Technical",

			nodes : [ {
				skill : "HANA",
			} ]
		};
		oTechnicalModel.setData(TechnicalData);
		var oProcessModel = new sap.ui.model.json.JSONModel();
		var ProcessData = {
			skill : "Process",

			nodes : [ {
				skill : "Customer Engagement",

			} ]
		};
		oProcessModel.setData({
			modelData : ProcessData
		});

		// AddSkillButton in Skill Catalog

		var oButtonaddSkillfromCatalog = new sap.ui.commons.Button({
			text : "Add skill to Form",
			press : function() {
				alert("Skill added!");
			}
		});

		var oProductTree = new sap.ui.table.TreeTable({
			selectionMode : sap.ui.table.SelectionMode.Single, // sap.ui.table.SelectionMode
			selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly, // sap.ui.table.SelectionBehavior
			toolbar : new sap.ui.commons.Toolbar({
				items : []
			}),

			columns : [ new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Skill"
				}),

				template : new sap.ui.commons.layout.HorizontalLayout(
						"skillcatalogproduct", {
							content : [
									new sap.ui.commons.TextView().bindProperty(
											"text", "skill"),
									oButtonaddSkillfromCatalog

							// oAuto1/*,
							// oButtonAddSkill
							]

						})
			}) ]
		});

		oProductTree.setModel(oProductModel);
		oProductTree.bindRows("/nodes");
        oProcessTree.addStyleClass("")
		//alert("ProductData inserted properly" + oProductModel.getJSON());

		var oTechnicalTree = new sap.ui.table.TreeTable({
			selectionMode : sap.ui.table.SelectionMode.Single, // sap.ui.table.SelectionMode
			selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly, // sap.ui.table.SelectionBehavior
			toolbar : new sap.ui.commons.Toolbar({
				items : []
			}),

			columns : [ new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Skill"
				}),

				template : new sap.ui.commons.layout.HorizontalLayout(
						"skillcatalogtechnical", {
							content : [
									new sap.ui.commons.TextView().bindProperty(
											"text", "skill"),
									oButtonaddSkillfromCatalog

							// oAuto1/*,
							// oButtonAddSkill
							]
						})
			}) ]
		});

		oTechnicalTree.setModel(oTechnicalModel);
		oTechnicalTree.bindRows("/nodes");

		var oProcessTree = new sap.ui.table.TreeTable({
			selectionMode : sap.ui.table.SelectionMode.Single, // sap.ui.table.SelectionMode
			selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly, // sap.ui.table.SelectionBehavior
			toolbar : new sap.ui.commons.Toolbar({
				items : []
			}),

			columns : [ new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Skill"
				}),

				template : new sap.ui.commons.layout.HorizontalLayout(
                    "skillcatalogprocess",
                    {
                        content : [
                            new sap.ui.commons.TextView().bindProperty("text", "skill"),
                            oButtonaddSkillfromCatalog

                            // oAuto1/*,
                            // oButtonAddSkill
                        ]
                    })
			}) ]
		});

		oProcessTree.setModel(oProductModel);
		oProcessTree.bindRows("/nodes");

		//Suggest Function
		//Help function to handle the suggest events of the search field
		var doSuggest = function(oEvent) {
			var sVal = oEvent.getParameter("value");
			var aSuggestions = filterCountries(sVal); //Find the countries (see example above)
			var oSearchControl = sap.ui.getCore().byId(
					oEvent.getParameter("id"));
			oSearchControl.suggest(sVal, aSuggestions); //Set the found suggestions on the search control
		};

		

		var oAuto = new sap.ui.commons.AutoComplete({
			tooltip : "This is an Auto Complete TextField with Custom Filter",
			displaySecondaryValues : true
			//change : onChange
		});
		/*function onChange(oEvent) {
			
		}*/
		oAuto.setModel(oModel);
		oAuto.setFilterFunction(function(sValue, oItem) {
		//	var sText = oItem.getText();
			var reg = new RegExp(sValue, 'ig');
			res = reg.exec(oItem.getText());
			/*if (!res) {
				res = reg.exec(oItem.getAdditionalText())
			}*/
			return (res) ? true : false;
		});
		oAuto.bindAggregation("items", "/", new sap.ui.core.ListItem({
			text : "{skill}",
			//additionalText : "{date}"
		}));

        // ToolPopUpProduct
        var oToolPopUpSkillCatalog = new sap.ui.ux3.ToolPopup({
            content : [ /*
             * new sap.ui.commons.Label({ text :
             * "TestButton" }),
             */

                new sap.ui.commons.layout.VerticalLayout({
                    width: "300px",
                    content :
                    //Search Field
                        [ oAuto, oProductTree ]
                })
            ]
        });


        // AddSkillButton
		var oButtonAddSkill = new sap.ui.commons.Button({
			text : "Add Skill...",

			//margin-right: "10px",

			press : function() {
				oToolPopUpSkillCatalog.setOpener(this);
				if (oToolPopUpSkillCatalog.isOpen()) {
					oToolPopUpSkillCatalog.close();
				} else {
					oToolPopUpSkillCatalog.open();
				}
			}
		});
        oButtonAddSkill.bindProperty("visible", "allowAdd", function(bValue) {
                                                                                return bValue===true;
                                                                             });


		/**/
		// Create an AutoComplete control and fill the items
		/*
		 * var oAuto1 = new sap.ui.commons.AutoComplete({
		 * tooltip : "Enter a skill", maxPopupItems : 5 });
		 * jQuery.sap.require("sap.ui.model.json.JSONModel");
		 * 
		 * for(var i=0; i<skillData.length; i++){
		 * oAuto1.addItem(new sap.ui.core.ListItem({text:
		 * skillData[i].skill})); }
		 */

		// Skill Tree
        var oTable2Template = new sap.ui.commons.layout.HorizontalLayout(
            "skill2", {
                content : [
                    new sap.ui.commons.TextView({width:"150px"}).bindProperty("text", "skill"),

                    oButtonAddSkill,
                    new sap.ui.commons.Image({
                        press : function() {
                            alert('Archived!');
                        }
                    }).bindProperty("src", "src")
                ]
            });
        var oTable2 = new sap.ui.table.TreeTable({
			selectionMode : sap.ui.table.SelectionMode.Single, // sap.ui.table.SelectionMode
			selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly, // sap.ui.table.SelectionBehavior
			toolbar : new sap.ui.commons.Toolbar({
				items : []
			}),

			columns : [
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Skill"
						}),
                        width: "300px",
						template : oTable2Template
					}),

					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "None"
						}),
						template : new sap.ui.commons.TextField().bindProperty(
								"value", "none"),
						editable : "true",
						width : "auto",
						hAlign : "Center"
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Basic"
						}),
						template : new sap.ui.commons.TextField().bindProperty(
								"value", "basic"),
						editable : "true",
						width : "auto",
						hAlign : "Center"
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Proficient"
						}),
						template : new sap.ui.commons.TextField().bindProperty(
								"value", "proficient"),
						editable : "true",
						width : "auto",
						hAlign : "Center"
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Expert"
						}),
						template : new sap.ui.commons.TextField().bindProperty(
								"value", "expert"),
						editable : "true",
						width : "auto",
						hAlign : "Center"
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Total"
						}),
						template : new sap.ui.commons.TextField().bindProperty(
								"value", "total"),
						editable : "true",
						width : "auto",
						hAlign : "Center"
					}) ]
		});

		// Tree implementation

		/**
		 * 
		 *  /* var oTree1 = new sap.ui.commons.Tree("tree", {
		 * select: function(oEvent){ var oNode =
		 * oEvent.getParameter("node"); if(oNode &&
		 * oNode.getNodes().length != 0){ //skip select for
		 * non-leaf nodes oEvent.preventDefault(); } } });
		 * oTree1.setTitle("Skill"); oTree1.setWidth("50%");
		 * oTree1.setHeight("auto");
		 * oTree.setShowHeaderIcons(true);
		 * oTree.setShowHorizontalScrollbar(false); //create
		 * Tree Nodes var oNode1 = new
		 * sap.ui.commons.TreeNode("node1", {text:"Computer",
		 * expanded: true }); var oNode2 = new
		 * sap.ui.commons.TreeNode("node2", {text:"OSDisk (C:)",
		 * expanded: true }); var oNode3 = new
		 * sap.ui.commons.TreeNode("node3", {text:"Program
		 * Files"}); var oNode4 = new
		 * sap.ui.commons.TreeNode("node4", {text:"Windows"});
		 * var oNode5 = new sap.ui.commons.TreeNode("node5",
		 * {text:"Mass Storage (USB)"}); var oNode6 = new
		 * sap.ui.commons.TreeNode("node6", {text:"Network"});
		 * var oNode7 = new sap.ui.commons.TreeNode("node7",
		 * {text:"Network A"}); oNode1.addNode(oNode2);
		 * oNode1.addNode(oNode5); oNode2.addNode(oNode3);
		 * oNode2.addNode(oNode4); oNode6.addNode(oNode7); //add
		 * Tree Node root to the Tree oTree.addNode(oNode1);
		 * oTree.addNode(oNode6);
		 */
		// Shell implementation
		var shell = new sap.ui.ux3.Shell({

			appTitle : "Skill Database Prototype", // give a
			// title
			paneWidth : 800,

			worksetItems : [ // add some items to the top
			// navigation
			new sap.ui.ux3.NavigationItem({
				key : "teams",
				text : "Teams",

				subItems : [

				new sap.ui.ux3.NavigationItem({
					key : "overview",
					text : "Overview"
				}), new sap.ui.ux3.NavigationItem("idTeamSkills", {
					key : "teamskills",
					text : "Team Skills"
				})

				]

			}), new sap.ui.ux3.NavigationItem({
				key : "skills",
				text : "Skills",

				subItems : [

				new sap.ui.ux3.NavigationItem({
					key : "catalog",
					text : "Catalog"
				}), new sap.ui.ux3.NavigationItem({
					key : "template",
					text : " Template"
				})

				]

			}), new sap.ui.ux3.NavigationItem({
				key : "trainings",
				text : "Trainings"
			}) ],

            //selectedWorksetItem: "idTeamSkills",

			worksetItemSelected : function(oEvent) {
				var sId = oEvent.getParameter("key");
				// var oShell = oEvent.oSource;
				switch (sId) {

				case "overview":

					oToolPopUpSkillCatalog.close();
					shell.removeAllContent();
					oModel.setData({
						modelData : teamData
					});
					oTable.setModel(oModel);
					oTable.bindRows("/modelData");

					// Initially sort the table
					oTable.sort(oTable.getColumns()[0]);
					shell.setContent(oTable);
					break;

				case "teamskills":
					shell.removeAllContent();
					oModel.setData(skillData);
					oTable2.setModel(oModel);
					oTable2.placeAt("content");
					oTable2.bindRows("/nodes");
					shell.setContent(oTable2);
					break;

				default:
					oToolPopUpSkillCatalog.close();
					shell.removeAllContent();
					break;
				}
			},
		// toolPopups : [oToolPopUpSkillCatalog ]

		});

		return shell;
	}

});
