; Goodbye world ( intel x86 version )
; 
; - Elijah629
; I hate assembly
; 

section .data
    msg db "Goodbye, World", 10

section .text
    global _start

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, 16
    int 0x80

    mov eax, 1
    xor ebx, ebx
    int 0x80
