//Enum allow us to define or declare a collection of related values, that can be numbers or string, as a set of name constants
enum ResourceAllocate {
    BOOK,
    PEN,
    DESK,
    COMPUTER,
    MOUSE,
    KEYBOARD,
    CPU
}
console.log(ResourceAllocate.BOOK); //0
console.log(ResourceAllocate.PEN);  //1

enum ResourceType {
    FILM = 1,
    DIRECTOR,
    ACTOR
}
console.log(ResourceType.FILM);         // 1
console.log(ResourceType.DIRECTOR);     // 2

enum Direction {
    left = 'left',
    right = 'right',
    up = 'up',
    down = 'down'
}
console.log(Direction.down); //down

export{}