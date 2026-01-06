import pygame
# Selection triggers new scenerios

pygame.init()
screen = pygame.display.set_mode((720,500))
clock = pygame.time.Clock()
running = True

player_pos = pygame.Vector2(screen.get_width()/0.5, screen.get_height()/0.5)

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("blue")

    #pygame.draw.polygon(screen, "red", player_pos, 40)
    pygame.display.flip()

    clock.tick(60)

#def choice_1():
#    if c_1 is True:
#        set()
#    else:
#        set_2()

pygame.quit()