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
				source: "Images/axialis_axialis_round_blue_gradient_png_plus.png",
				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
               
				nodes : [ {
					skill : "SAP Solution Composer",
					src : "images/Folder_Icon_SAP.png",
					none : "-",
					basic : "-",
					proficient : "-",
					expert : "-",
					total : "-",
                    allowAdd: false,
                    radio:true
				} ]
			}, {
				skill : "Technical",
				source: "Images/axialis_axialis_round_blue_gradient_png_plus.png",
				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
				nodes : [ {
					skill : "HANA",
					src : "images/Folder_Icon_SAP.png",
					none : "-",
					basic : "-",
					proficient : "-",
					expert : "-",
					total : "-"
				} ]
			}, {
				skill : "Process",
				source: "Images/axialis_axialis_round_blue_gradient_png_plus.png",
				none : "-",
				basic : "-",
				proficient : "-",
				expert : "-",
				total : "-",
                allowAdd: true,
				nodes : [ {
					skill : "Customer Engagement",
					src : "images/Folder_Icon_SAP.png",
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
		oRadioButton=new sap.ui.commons.RadioButton({
            //text : 'yes',
            tooltip : 'Select for Yes',
            groupName : 'Group1',
                    select : function() {alert('YES');} 
            });
		oRadioButton.bindProperty("visible", "radio");
		var oProductTemplate = new sap.ui.commons.layout.HorizontalLayout(
	            "skill4", {
	                content : [
	                           	oRadioButton
	                   
	                ]
	            });
		var oSkillTree = new sap.ui.table.TreeTable({
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
						"skillcatalogtemplate", {
							content : [
									new sap.ui.commons.TextView().bindProperty(
											"text", "skill"),
									oButtonaddSkillfromCatalog
									

							// oAutoProduct1/*,
							// oButtonAddSkill
							]

						})
			}) ,
			new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Select"
				}),
				
				template:oProductTemplate,
			 width: "100px"})]
		});

		oSkillTree.setModel(oModel);
		oSkillTree.bindRows("/nodes");
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
									

							// oAutoProduct1/*,
							// oButtonAddSkill
							]

						})
			}) ,
			new sap.ui.table.Column({
				label : new sap.ui.commons.Label({
					text : "Select"
				}),
				
				template:oProductTemplate,
			 width: "100px"})]
		});

		oProductTree.setModel(oProductModel);
		oProductTree.bindRows("/nodes");
       // oProcessTree.addStyleClass("")
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
							// oAutoProduct1/*,
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

                            // oAutoProduct1/*,
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

		

		var oAutoProduct = new sap.ui.commons.AutoComplete({
			tooltip : "This is an Auto Complete TextField with Custom Filter",
			displaySecondaryValues : true
			//change : onChange
		});
		/*function onChange(oEvent) {
			
		}*/
		oAutoProduct.setModel(oModel);
		oAutoProduct.setFilterFunction(function(sValue, oItem) {
		//	var sText = oItem.getText();
			var reg = new RegExp(sValue, 'ig');
			res = reg.exec(oItem.getText());
			/*if (!res) {
				res = reg.exec(oItem.getAdditionalText())
			}*/
			return (res) ? true : false;
		});
		oAutoProduct.bindAggregation("items", "/", new sap.ui.core.ListItem({
			text : "{skill}",
			//additionalText : "{date}"
		}));
		var oAuto = new sap.ui.commons.AutoComplete({
			tooltip : "This is an Auto Complete TextField with Custom Filter",
			displaySecondaryValues : true
			//change : onChange
		});
		oAuto.setFilterFunction(function(sValue, oItem) {
			//	var sText = oItem.getText();
				var reg = new RegExp(sValue, 'ig');
				res = reg.exec(oItem.getText());
				/*if (!res) {
					res = reg.exec(oItem.getAdditionalText())
				}*/
				return (res) ? true : false;
			});
		oAutoProduct.bindAggregation("items", "/", new sap.ui.core.ListItem({
			text : "{skill}",
			//additionalText : "{date}"
		}));
		  var oButtonAddSkillTemplate = new sap.ui.commons.Button({
				icon : "images/Plus_Icon_SAP.png",
				lite : true,

				//margin-right: "10px",

				press : function() {
					oToolPopUpTemplate.setOpener(this);
					if (oToolPopUpTemplate.isOpen()) {
						oToolPopUpTemplate.close();
					} else {
						oToolPopUpTemplate.open();
					}
				}
			});
		  oButtonAddSkillTemplate.bindProperty("visible", "allowAdd", function(bValue) {
		    	alert(bValue);
		                                                                            return bValue===true;
		                                                                         });
		  var oToolPopUpTemplate = new sap.ui.ux3.ToolPopup({
	           content : [ 

	               new sap.ui.commons.layout.VerticalLayout({
	                   width: "300px",
	                   content :
	                   //Search Field
	                       [ oAuto, oSkillTree ]
	               })
	           ]
	       });
		
        // ToolPopUpProduct
        var oToolPopUpSkillCatalog = new sap.ui.ux3.ToolPopup({
            content : [ 
                new sap.ui.commons.layout.VerticalLayout({
                    width: "300px",
                    content :
                    //Search Field
                        [ oAutoProduct, oProductTree]
                })
            ]
        });

        
        // AddSkillButton
		var oButtonAddSkill = new sap.ui.commons.Button({
			//text : "Add Skill...",
			//text:"value",
			icon : "images/Plus_Icon_SAP.png",
			lite : true,
			
			
			//margin-right: "10px",
			//table: "{checked}",
			
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
       // oButtonAddSkill.bindProperty("press", "press")

		/**/
		// Create an AutoComplete control and fill the items
		/*
		 * var oAutoProduct1 = new sap.ui.commons.AutoComplete({
		 * tooltip : "Enter a skill", maxPopupItems : 5 });
		 * jQuery.sap.require("sap.ui.model.json.JSONModel");
		 * 
		 * for(var i=0; i<skillData.length; i++){
		 * oAutoProduct1.addItem(new sap.ui.core.ListItem({text:
		 * skillData[i].skill})); }
		 */

		// Skill Tree
        var oTable2Template = new sap.ui.commons.layout.HorizontalLayout(
            "skill2", {
                content : [
                    new sap.ui.commons.TextView({width:"150px",id:"f"}).bindProperty("text", "skill")
                   
                ]
            });
        var oTable2Template1 = new sap.ui.commons.layout.HorizontalLayout(
                "skill3", {
                    content : [
                        //new sap.ui.commons.TextView({width:"150px"}).bindProperty("text", "skill")
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
							
							text : "Action"
						}),
						
                        width: "100px",
						template : oTable2Template1
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
        
        
       var skilllevelnodes = {skill: "Skill Levels",
			allowAdd: false,
			nodes:[
			       {
			    	   skill:"None",
			    		allowAdd: false,
			       },
			       {
			    	   skill:"Basic",
			    		allowAdd: false,
			       },
			       {
			    	   skill:"Proficient",
			    		allowAdd: false,
			       },
			       {
			    	   skill:"Expert",
			    		allowAdd: false,
			       },
			       ]};
        var skillTemplateData = {
				nodes : [ {
					skill : "Product",
					
					
					nodes :[ skilllevelnodes,{
						skill : "SAP Solution Composer",
						allowAdd: false,
						nodes: skilllevelnodes

						
					}]
				}
				, {
					skill : "Technical",
					
					nodes : [ skilllevelnodes,
						       {
						skill : "HANA",
						allowAdd: false,
						nodes:[skilllevelnodes]
					} ]
				}, {
					skill : "Process",
					
					nodes : [ skilllevelnodes,{
						skill : "Customer Engagement",
						allowAdd: false,
						nodes:[skilllevelnodes]
					} ]
				}

				]
			};
        var oListBoxProduct = new sap.ui.commons.ListBox({
			items:[
					new sap.ui.core.ListItem({
//						id:"0",
				text : "0"
			}),
			new sap.ui.core.ListItem({
				text : "1"
			}),
			new sap.ui.core.ListItem({
				text : "2"
			}),
			new sap.ui.core.ListItem({
				text : "3"
			}),
			new sap.ui.core.ListItem({
				text : "4"
			}),
			new sap.ui.core.ListItem({
//				id: "5",
				text : "5"
			}),
			new sap.ui.core.ListItem({
				text : "6"
			}),
			new sap.ui.core.ListItem({
				text : "7"
			}),
			new sap.ui.core.ListItem({
				text : "8"
			}),
			new sap.ui.core.ListItem({
				text : "9"
			}),
			new sap.ui.core.ListItem({
				text : "10"
			}),
			new sap.ui.core.ListItem({
				text : "11"
			}),new sap.ui.core.ListItem({
				text : "12"
			})
			 ]});
	
	//oListBoxProduct.bindAggregation("items", "selectableItems");
	//oListBoxProduct.setModel(oDropDownBoxProductModel);
    var oDropDownBoxProduct =new sap.ui.commons.DropdownBox({
/*	    	items:[
				new sap.ui.core.ListItem({
			text : "0"
		}),
		new sap.ui.core.ListItem({
			text : "1"
		}),
		new sap.ui.core.ListItem({
			text : "2"
		}),
		new sap.ui.core.ListItem({
			text : "3"
		}),
		new sap.ui.core.ListItem({
			text : "4"
		}),
		new sap.ui.core.ListItem({
			text : "5"
		}),
		new sap.ui.core.ListItem({
			text : "6"
		}),
		new sap.ui.core.ListItem({
			text : "7"
		}),
		new sap.ui.core.ListItem({
			text : "8"
		}),
		new sap.ui.core.ListItem({
			text : "9"
		}),
		new sap.ui.core.ListItem({
			text : "10"
		}),
		new sap.ui.core.ListItem({
			text : "11"
		})
		 ],*/
    	 displaySecondaryValues:true, 
    	 "association:listBox" : oListBoxProduct,
		
		tooltip: "Please select the maximum number of skills insertable into the skill capturing form.",
		listBox: oListBoxProduct,
		value : "5"
			
	});
   // oDropDownBoxProduct.addAssociation("listBox", oListBoxProduct);
    //oDropDownBoxProduct.setModel(oDropDownBoxProductModel);

    var TemplateTableTemplate1 = new sap.ui.commons.layout.HorizontalLayout(
            "SkillTemplate1", {
                content : [
                    oButtonAddSkillTemplate,
                    new sap.ui.commons.Image({
                        press : function() {
                            alert('Archived!');
                        }
                    }).bindProperty("src", "src")
                ]
            });
	// Skill Template
	
	 oTemplateTable= new sap.ui.table.TreeTable({
			selectionMode : sap.ui.table.SelectionMode.Single, // sap.ui.table.SelectionMode
			selectionBehavior : sap.ui.table.SelectionBehavior.RowOnly, // sap.ui.table.SelectionBehavior
			columns : [
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Skill",
							
						}),width:"300px",

						template : new sap.ui.commons.layout.HorizontalLayout(
								"SkillTemplate", {
									content : [
											new sap.ui.commons.TextView({width:"150px"})
													.bindProperty("text",
															"skill"),
															
												oButtonAddSkillTemplate.bindProperty("visible", "allowAdd"),
											new sap.ui.commons.TextView({text: "MaxCount: "}).bindProperty("visible", "allowAdd"), 
											oDropDownBoxProduct.bindProperty("visible", "allowAdd")
							
									]
								})
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							
							text : "Action"
						}),
						
                        width: "50px",
						template : oButtonAddSkillTemplate
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Target Date",
							tooltip: "Add date to specify the target date"
						}),
						tooltip: "Add date to specify the target date",
						 width: "50px",
						template : new sap.ui.commons.TextField({
							enabled: false
						}).bindProperty("value", "date")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Target Demand abs. Level above"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "targetdemandabsolutelevelabove")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Target Demand % Level above"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "targetdemandpercentlevelabove")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Target Demand abs. my Level"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "targetdemandabsolutemylevel")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Target Demand % my Level"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "targetdemandpercentmylevel")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Skill Plan abs. my Level"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "targetdemandpercentmylevel")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Actual Skill (at least)"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "actualskill")						
					}),
					new sap.ui.table.Column({
						label : new sap.ui.commons.Label({
							text : "Actual Skills in %"
						}),
						 width: "50px",
						template : new sap.ui.commons.TextField().bindProperty("value", "actualskillpercent")						
					})
					
					
					
					

				 ]
		});





	
	//DropDownBox Product
	
		/*new sap.ui.commons.DropdownBox({
		editable : true,
		maxHistoryItems : 5,
		
	});*/
	//oDropDownBoxProduct.addAssociation("listBox", oListBoxProduct);
	//oDropDownBoxProduct.bindProperty("value", "/selectedItem");
	var oSaveButton= new sap.ui.commons.Button({text:"Save", width: "200px", tooltip:"Click to save changes."});
	var oPublishButton = new sap.ui.commons.Button({text:"Publish", width:"200px", tooltip:"Click to send the form to managers."});
	var oButtonTemplateLayout= new sap.ui.commons.layout.HorizontalLayout("buttontemplatelayout",{
		content:[oSaveButton, oPublishButton
		         ]
	});

	var oTemplateLayout= new sap.ui.commons.layout.VerticalLayout("templatelayout",{
		width:"1600px",
		content: [oTemplateTable, oButtonTemplateLayout
		          ]
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

				case "template":
					shell.removeAllContent();
					oToolPopUpSkillCatalog.close();
					oToolPopUpTemplate.close();
					oModel.setData(skillTemplateData);
					oSkillTree.setModel(oModel);
					oTemplateTable.setModel(oModel);
					oTemplateTable.bindRows("/nodes");
					shell.setContent(oTemplateLayout);
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
