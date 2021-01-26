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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 100)
    music.baDing.play()
    info.changeScoreBy(1)
    if (info.score() >= 10) {
        guy.setImage(img`
            . . . . f f f f . . . . .
            . . f f f f f f f f . . .
            . f f f f f f c f f f . .
            f f f f f f c c f f f c .
            f f f c f f f f f f f c .
            c c c f f f e e f f c c .
            f f f f f e e f f c c f .
            f f f b f e e f b f f f .
            . f 4 1 f 4 4 f 1 4 f d d
            . f e 4 4 4 4 4 4 e d d .
            . f f f e e e e c a a a c
            f e f b 7 7 7 c f f f f f
            e 4 f 7 7 7 7 c f f f f f
            e e f 6 6 6 6 c f f f f f
            . . . f f f f c c f f f c
            . . . f f . . f c c c c c
        `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 10 && guy.isHittingTile(CollisionDirection.Right)) {
        music.magicWand.play()
        tiles.setTileAt(tiles.getTileLocation(8, 5), myTiles.tile0)
        tiles.setWallAt(tiles.getTileLocation(8, 5), false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    info.changeScoreBy(-3)
    if (info.score() < 0) {
        info.setScore(0)
    }
    if (info.life() > 0) {
        music.jumpDown.play()
    }
    if (info.score() < 10) {
        guy.setImage(img`
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
        `)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
let bombLit: Sprite = null
let bomb: Sprite = null
let guy: Sprite = null
guy = sprites.create(img`
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
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000070000000000000000000000000000000700000000000000000000000000000007000000000000000000000000000000070000000000000000000000000000000700000000000000000000000000080007000000000001010101010101010101070000000000090909090909090909090700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
                . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . 2 . . . . .
                . . . . . . . . . . 2 . . . . .
                . . . . . . . . 2 . 2 . . . . .
                2 2 2 2 2 2 2 2 2 2 2 . . . . .
                2 2 2 2 2 2 2 2 2 2 2 . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `,
            [myTiles.tile0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight3,sprites.dungeon.darkGroundEast],
            TileScale.Sixteen
        ))
scene.setBackgroundColor(1)
controller.moveSprite(guy, 100, 0)
info.setScore(0)
info.setLife(5)
guy.setPosition(80, 88)
tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.dungeon.collectibleInsignia)
info.startCountdown(60)
game.onUpdateInterval(2000, function () {
    bomb = sprites.create(img`
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
    `, SpriteKind.Food)
    bomb.lifespan = 4500
    bomb.setPosition(Math.randomRange(5, 121), 0)
    bomb.setVelocity(0, 25)
})
game.onUpdateInterval(4000, function () {
    bombLit = sprites.create(img`
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
    `, SpriteKind.Enemy)
    bombLit.lifespan = 5000
    bombLit.setPosition(Math.randomRange(5, 121), 0)
    bombLit.setVelocity(0, 50)
})
