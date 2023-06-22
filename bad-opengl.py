import pygame 
from pygame.locals import *

from OpenGL.GL import *
from OpenGL.GLU import *
from OpenGL.GLUT import *
import numpy, random, time

def IdentityMat44(): return numpy.matrix(numpy.identity(4), copy=False, dtype='float32')

# all Verticies and edges for the triangle
triangleVertices = ((2,-2,-2),(-2,-2,-2),(-2,-2,2),(2,-2,2),(0,2,0),(0,-6,0))
triangleEdges = ((0,1),(0,3),(1,2),(2,3),(3,4),(2,4),(1,4),(0,4),(3,5),(2,5),(1,5),(0,5))
triangleTriangles = ((0, 1, 4),(0, 3, 4),(1, 2, 4),(2, 3, 4),(0, 1, 5),(0, 3, 5),(1, 2, 5),(2, 3, 5))

def triangle():
    # Triangle rendering
    glBegin(GL_LINES)
    for triangleEdge in triangleEdges:
        for triangleVertex in triangleEdge:
            glVertex3fv(triangleVertices[triangleVertex])
            glColor3d(random.choice((0,1)), random.choice((0,1)), random.choice((0,1)))
    glEnd()
def Striangle():
    # Solid Triangle rendering
    glBegin(GL_TRIANGLES)
    for triangleTriangle in triangleTriangles:
        for triangleVertex in triangleTriangle:
            glVertex3fv(triangleVertices[triangleVertex])
            glColor3d(random.choice((0,1)), random.choice((0,1)), random.choice((0,1)))
    glEnd()

def floor():
    floorVerticies = ((20,-8,20),(20,-8,-20),(-20,-8,20),(-20,-8,-20))
    floorEdges = ((0,2),(0,1),(1,3),(2,3))
    floorQuads = ((0,1,2,3))
    glBegin(GL_QUADS)
    for triangleVertex in (1,0,2,3):
        glVertex3fv(floorVerticies[triangleVertex])
        glColor3f(0.33,0.33,0.33)
    glEnd()

def room():
    wallVerticies = ((20,8,-20),(20,-8,-20),(-20,8,-20),(-20,-8,-20))
    wallEdges = ((0,2),(0,1),(1,3),(2,3))
    glBegin(GL_QUADS)
    for triangleVertex in (1,0,2,3):
        glVertex3fv(wallVerticies[triangleVertex])
        glColor3f(0.33,0.33,0.33)
    glEnd()

    glBegin(GL_QUADS)
    wallVerticies = ((20,8,-20),(20,-8,-20),(20,8,20),(20,-8,20))
    for triangleVertex in (1,0,2,3):
        glVertex3fv(wallVerticies[triangleVertex])
        glColor3f(0.33,0.33,0.33)
    glEnd()

    glBegin(GL_QUADS)
    wallVerticies = ((-20,8,20),(-20,-8,20),(-20,8,-20),(-20,-8,-20))
    for triangleVertex in (1,0,2,3):
        glVertex3fv(wallVerticies[triangleVertex])
        glColor3f(0.33,0.33,0.33)
    glEnd()

def main():
    # Start pygame since that is what we use :D
    pygame.init()
    display = (1500, 900)
    screen = pygame.display.set_mode(display, DOUBLEBUF | OPENGL)
    pygame.display.set_caption("Fun")
    # set up all movement variables
    tx = 0
    ty = 0
    tz = 0
    ry = 0

    glMatrixMode(GL_PROJECTION)
    gluPerspective(45, (display[0]/display[1]), 0.1, 50.0)

    view_mat = IdentityMat44()
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()
    glTranslatef(0, 0, -10)
    glGetFloatv(GL_MODELVIEW_MATRIX, view_mat)
    glLoadIdentity()

    while True:

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    quit()
                if   event.key == pygame.K_a:     tx =  0.1
                elif event.key == pygame.K_d:     tx = -0.1
                elif event.key == pygame.K_w:     tz =  0.1
                elif event.key == pygame.K_s:     tz = -0.1
                elif event.key == pygame.K_RIGHT: ry =  1.0
                elif event.key == pygame.K_LEFT:  ry = -1.0
                elif event.key == pygame.K_UP:    ty = -0.1
                elif event.key == pygame.K_DOWN:  ty =  0.1
            elif event.type == pygame.KEYUP: 
                if   event.key == pygame.K_a     and tx > 0: tx = 0
                elif event.key == pygame.K_d     and tx < 0: tx = 0
                elif event.key == pygame.K_w     and tz > 0: tz = 0
                elif event.key == pygame.K_s     and tz < 0: tz = 0
                elif event.key == pygame.K_RIGHT and ry > 0: ry = 0.0
                elif event.key == pygame.K_LEFT  and ry < 0: ry = 0.0
                elif event.key == pygame.K_UP    and ty < 0: ty = 0.0
                elif event.key == pygame.K_DOWN  and ty > 0: ty = 0.0

        glPushMatrix()
        glLoadIdentity()
        glTranslatef(tx,ty,tz)
        glRotatef(ry, 0, 1, 0)
        glMultMatrixf(view_mat)

        glGetFloatv(GL_MODELVIEW_MATRIX, view_mat)

        glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT)
        Striangle()
        floor()
        room()
        glPopMatrix()

        pygame.display.flip()
        pygame.time.wait(10)

if __name__ == "__main__":
    main()