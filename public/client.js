var socket = io() || {};
socket.isReady = false;

window.addEventListener('load', function() {

	var execInUnity = function(method) {
		if (!socket.isReady) return;
		
		var args = Array.prototype.slice.call(arguments, 1);
		
		if(unityInstance!=null)
		{
		  unityInstance.SendMessage("NetworkManager", method, args.join(':'));
		}
		
		
	};

	socket.on('PONG', function(totalPlayers) {
				      		
	  var currentUserAtr = totalPlayers+':'+" ";
	  if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnPrintPongMsg',currentUserAtr);
		}
	  
	});
	socket.on('JOIN_SUCCESS', function(id,name,avatar) {
				      		
	  var currentUserAtr = id+':'+name+':'+avatar;
	 if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnJoinGame', currentUserAtr);
		}
	  
	});
	socket.on('SPAWN_PLAYER', function(id,name,avatar,dx,dz) {
				      		
	  var currentUserAtr = id+':'+name+':'+avatar+':'+dx+":"+dz;
	   if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnSpawnPlayer', currentUserAtr);
		}
	 
	});
	
	socket.on('UPDATE_POS_AND_ROT', function(id,dx,dz,rotation) {
				      		
	  var currentUserAtr = id+':'+dx+':'+dz+":"+rotation;
	  
	  if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnUpdatePosAndRot', currentUserAtr);
		}
	 
	});
	
	socket.on('UPDATE_BEST_KILLER', function(name,ranking,kills) {
				      		
	  var currentUserAtr = name+":"+ranking+":"+kills;
	   if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUpdateBestKillers', currentUserAtr);
		}
	 
	});
	
	

	  socket.on('UPDATE_SHOOT', function(id) {
				      		
	  var currentUserAtr = id+":"+" ";
	  
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUpdateShoot', currentUserAtr);
		}
	 
	});	
	
   socket.on('UPDATE_PLAYER_DAMAGE', function(id,health) {
				      		
	  var currentUserAtr = id+':'+health;
	  if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnUpdatePlayerDamage', currentUserAtr);
		}
	  
	});	

 socket.on('GAME_OVER', function(target_id,shooter_id,shooter_kills) {
				      		
	  var currentUserAtr = target_id+":"+shooter_id+":"+shooter_kills;
	   if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnGameOver', currentUserAtr);
		}
	  
	});	
	

 socket.on('USER_DISCONNECTED', function(id) {
				      		
	  var currentUserAtr = id+":"+" ";
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUserDisconnected', currentUserAtr);
		}
	 
	});		


});//END_WINDOW.ADDEVENTLISTENER

