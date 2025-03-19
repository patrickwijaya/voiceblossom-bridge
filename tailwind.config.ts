
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                aac: {
                    blue: '#3d88e1',
                    yellow: '#fdc526',
                    green: '#4cc04c',
                    red: '#e34234',
                    orange: '#ff9a00',
                    purple: '#9c6ade',
                    teal: '#00b8d9',
                    pink: '#ff5bae',
                    gray: '#8a9097',
                    light: '#f7f9fa',
                    dark: '#2c3036'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' }
                },
                'pulse-subtle': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.85' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'slide-up': {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                'bounce-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-3px)' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
                'scale-in': 'scale-in 0.2s ease-out',
                'fade-in': 'fade-in 0.3s ease-out',
                'slide-up': 'slide-up 0.3s ease-out',
                'slide-down': 'slide-down 0.3s ease-out',
                'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite'
			},
            boxShadow: {
                'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
                'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'strong': '0 8px 30px rgba(0, 0, 0, 0.12)',
                'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
                'highlight': '0 0 0 2px rgba(66, 153, 225, 0.5)'
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
                'width': 'width',
                'size': 'height, width'
            },
            transitionTimingFunction: {
                'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
