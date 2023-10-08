export const isTeacher = (userId?: string | null) => {
  // Obtém o valor da variável de ambiente NEXT_PUBLIC_TEACHER_ID
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID;

  // Verifica se o userId está na lista de IDs de administrador
  if (userId && teacherIds) {
    const teacherIdList = teacherIds.split(',').map(id => id.trim());
    return teacherIdList.includes(userId);
  }

  return false;
};
