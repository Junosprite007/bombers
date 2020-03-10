namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
let guy = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e 5 d d d 5 
f e f b 7 7 7 7 5 d d d 5 
e 4 f 7 7 7 7 7 5 d d d 5 
e e f 6 6 6 6 6 5 d d d 5 
. . . f f f f f f 5 5 5 . 
. . . f f . . f f . . . . 
`, 0)
let bomb = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . b b b . . . . . 
. . . . . . . b b . . . . . . . 
. . . . . . a a a a . . . . . . 
. . . . . . a a a a . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
. . . . . f f f f f f . . . . . 
`, SpriteKind.Player)
let bombLit = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . . 
. . . . . . . . . 5 . 5 5 . . . 
. . . . . . . . . . 4 4 . . 5 . 
. . . . . . . . b b b 2 4 5 . . 
. . . . . . . b b . 4 4 . . 5 . 
. . . . . . a a a 5 . 5 5 . . . 
. . . . . . a a a a . . . 5 . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f f f f f f f . . . . 
. . . . . f f f f f f . . . . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000060000000000000000000000000000000600000000000000000000000000000006000000000000000000000000000000060000000000000000000006000006000600000000000000000006060006060006000000000000000000060606060606060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303000000000000000000000000000004050101010101010101010101010101010102020202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(1)
controller.moveSprite(guy, 100, 100)
