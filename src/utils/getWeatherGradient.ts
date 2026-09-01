export interface GradientTheme {
  colors: readonly [string, string, string];
  isDark: boolean;
}

export function getWeatherGradient(iconCode?: string): GradientTheme {
  const isNight = iconCode?.endsWith('n');
  const code = iconCode?.slice(0, 2);

  if (isNight) {
    return {
      colors: ['#0f172a', '#1e1b4b', '#312e81'] as const,
      isDark: true,
    };
  }

  switch (code) {
    case '01': // Céu limpo
      return {
        colors: ['#2563eb', '#3b82f6', '#93c5fd'] as const,
        isDark: false,
      };
    case '02':
    case '03':
    case '04': // Nuvens
      return {
        colors: ['#475569', '#64748b', '#94a3b8'] as const,
        isDark: false,
      };
    case '09':
    case '10': // Chuva
      return {
        colors: ['#1e293b', '#334155', '#475569'] as const,
        isDark: true,
      };
    case '11': // Tempestade
      return {
        colors: ['#2e1065', '#4c1d95', '#6b21a8'] as const,
        isDark: true,
      };
    case '13': // Neve
      return {
        colors: ['#334155', '#64748b', '#cbd5e1'] as const,
        isDark: false,
      };
    case '50': // Névoa
      return {
        colors: ['#64748b', '#94a3b8', '#cbd5e1'] as const,
        isDark: false,
      };
    default:
      return {
        colors: ['#2563eb', '#60a5fa', '#bfdbfe'] as const,
        isDark: false,
      };
  }
}
