

function jumpVnjson(){





this.on('jump', pathname=>{

				let path = pathname.split('.');

				this.current.index = 0;
				//label
				if(!/\./i.test(pathname)){
					this.current.labelName = path[0];
					this.emit('jump.label', pathname)
				}
				//scene.label
				if(/\./i.test(pathname)){
						this.current.sceneName = path[0];
						this.current.labelName = path[1];
					
						if(this.sceneLoader.mode==='once'){
							//this.assetsPath = []
							var arr = this.sceneLoader.scenes.filter(item=>{ return item.name===path[0];})
							let next = ()=>{
										this.emit('sceneLoad', {name: arr[0].name, assets: this.assetsPath});
										this.on('postload', ()=>{
											this.emit('jump.scene', pathname)
										})
							}
							this.assetsPath = [];
							this.sceneLoader.loader(arr[0], next);
						}
						else{
								this.emit('jump.scene', pathname)
						};
				};
			})



}