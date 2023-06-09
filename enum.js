//Enum allow us to define or declare a collection of related values, that can be numbers or string, as a set of name constants
var ResourceAllocate;
(function (ResourceAllocate) {
    ResourceAllocate[ResourceAllocate["BOOK"] = 0] = "BOOK";
    ResourceAllocate[ResourceAllocate["PEN"] = 1] = "PEN";
    ResourceAllocate[ResourceAllocate["DESK"] = 2] = "DESK";
    ResourceAllocate[ResourceAllocate["COMPUTER"] = 3] = "COMPUTER";
    ResourceAllocate[ResourceAllocate["MOUSE"] = 4] = "MOUSE";
    ResourceAllocate[ResourceAllocate["KEYBOARD"] = 5] = "KEYBOARD";
    ResourceAllocate[ResourceAllocate["CPU"] = 6] = "CPU";
})(ResourceAllocate || (ResourceAllocate = {}));
console.log(ResourceAllocate.BOOK); //0
console.log(ResourceAllocate.PEN); //1
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["FILM"] = 1] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["ACTOR"] = 3] = "ACTOR";
})(ResourceType || (ResourceType = {}));
console.log(ResourceType.FILM);
console.log(ResourceType.DIRECTOR);
var Direction;
(function (Direction) {
    Direction["left"] = "left";
    Direction["right"] = "right";
    Direction["up"] = "up";
    Direction["down"] = "down";
})(Direction || (Direction = {}));
console.log(Direction.down);
