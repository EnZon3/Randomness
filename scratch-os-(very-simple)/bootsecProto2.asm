[org 0x7c00]

mov [BOOT_DRIVE]

mov bp, 0x8000
mov sp, bp

mov bx, 0x9000
mov dh, 5
mov dl [BOOT_DRIVE]
call disk_load

mov dx, [0x9000]
call print_hex

mov dx, [0x9000 + 512]
call print_hex

jmp $ ; the simplest loop ever tbh

%include "print_string.asm"
%include "print_hex.asm"
%include "disk_load.asm"
; some of our cool disk load functions!

; Variables
BOOT_DRIVE: db 0

; padding don't forget lol
times 510-($-$$) db 0
dw 0xaa55

times 256 dw 0xdada
times 256 dw 0xface
