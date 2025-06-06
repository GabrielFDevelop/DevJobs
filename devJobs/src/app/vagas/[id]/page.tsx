'use client'

// Client components não podem ser assíncronos e devem ser usados para interações do usuário, como eventos de clique, formulários, etc.
// Server components são usados para renderizar conteúdo estático e podem ser assíncronos, permitindo chamadas de API diretamente no componente. Mas não podem ser reativos.