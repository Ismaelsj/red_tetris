    // Server error
const SERVER_INTERNAL_ERROR = 'server:INTERNAL_ERROR'

    // user
        // login
const CLIENT_USER_CONNECTION = 'client:USER_CONNECTION'
const SERVER_USER_INVALIDE_NAME = 'server:USER_INVALIDE_NAME'  
const SERVER_USER_VALIDE_NAME = 'server:USER_VALIDE_NAME'      
        // logout
const SERVER_USER_NOT_FOUND = 'server:USER_NOT_FOUND'          
const CLIENT_USER_DISCONNECT = 'client:USER_DISCONNECT'         
const SERVER_USER_DISCONNECT = 'server:USER_DISCONNECT'         
    
    //room
const SERVER_ROOM_NOT_FOUND = 'server:ROOM_NOT_FOUND'           
const CLIENT_USER_CHANGE_ROOM = 'client:USER_CHANGE_ROOM'
const SERVER_USER_CHANGE_ROOM = 'server:USER_CHANGE_ROOM'
const SERVER_USER_LEAVE_ROOM = 'server:USER_LEAVE_ROOM'        
const SERVER_USER_JOIN_ROOM = 'server:USER_JOIN_ROOM'          
    
    // messages
const CLIENT_SEND_MESSAGE = 'client:SEND_MESSAGE'       
const SERVER_RES_MESSAGE = 'server:RES_MESSAGE'                

    // game
const CLIENT_START_GAME = 'client:START_GAME'
const CLIENT_PAUSE_GAME = 'client:PAUSE_GAME'
const CLIENT_RETURN_GAME = 'client:RETURN_GAME'
const CLIENT_STOP_GAME = 'client:STOP_GAME'
const CLIENT_END_OF_GAME = 'client:END_OF_GAME'
const CLIENT_GIVE_MALUS = 'client:GIVE_MALUS'
const SERVER_GIVE_MALUS = 'server:GIVE_MALUS'
const SERVER_START_GAME = 'server:START_GAME'
const SERVER_PAUSE_GAME = 'server:PAUSE_GAME'
const SERVER_STOP_GAME = 'server:STOP_GAME'
const SERVER_THE_WINNER_IS = 'server:THE_WINNER_IS'
        // board
const CLIENT_SEND_UPDATE_BOARD = 'client:SEND_UPDATE_BOARD'
const SERVER_RES_UPDATE_BOARD = 'server:RES_UPDATE_BOARD'      
        // pieces
const CLIENT_PIECES_ASKED = 'client:PIECES_ASKED'
const CLIENT_REPLCAEMENT_PIECES_ASKED = 'client:REPLACEMENT_PIECES_ASKED'
const SERVER_INCOMMING_PIECES = 'server:INCOMMING_PIECES'       
const SERVER_INCOMMING_REPLACEMENT_PIECES = 'server:INCOMMING_REPLACEMENT_PIECES'       

export {
    SERVER_INTERNAL_ERROR,
    
    CLIENT_USER_CONNECTION,
    SERVER_USER_INVALIDE_NAME,
    SERVER_USER_VALIDE_NAME,
    SERVER_USER_NOT_FOUND,
    CLIENT_USER_DISCONNECT,
    SERVER_USER_DISCONNECT,
    
    SERVER_ROOM_NOT_FOUND,
    CLIENT_USER_CHANGE_ROOM,
    SERVER_USER_CHANGE_ROOM,
    SERVER_USER_LEAVE_ROOM,
    SERVER_USER_JOIN_ROOM,
    
    CLIENT_SEND_MESSAGE,
    SERVER_RES_MESSAGE,

    CLIENT_START_GAME,
    CLIENT_PAUSE_GAME,
    CLIENT_RETURN_GAME,
    CLIENT_STOP_GAME,
    CLIENT_GIVE_MALUS,
    SERVER_GIVE_MALUS,
    SERVER_START_GAME,
    SERVER_PAUSE_GAME,
    SERVER_STOP_GAME,
    CLIENT_END_OF_GAME,
    SERVER_THE_WINNER_IS,
    CLIENT_SEND_UPDATE_BOARD,
    SERVER_RES_UPDATE_BOARD,
    CLIENT_PIECES_ASKED,
    CLIENT_REPLCAEMENT_PIECES_ASKED,
    SERVER_INCOMMING_PIECES,
    SERVER_INCOMMING_REPLACEMENT_PIECES
}