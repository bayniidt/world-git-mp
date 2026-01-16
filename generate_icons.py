
import os
from PIL import Image, ImageDraw, ImageFont

def create_icon(filename, color, text):
    size = (81, 81)
    # Transparent background
    img = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw a circle or simple shape
    # Center: 40, 40. Radius 30.
    left_up_point = (10, 10)
    right_down_point = (71, 71)
    
    # Draw outline or fill
    # For simplicity, let's just text or a simple shape
    # We'll draw a rounded rectangle
    
    draw.rounded_rectangle([left_up_point, right_down_point], radius=10, fill=None, outline=color, width=3)
    
    # Add text (first letter of filename usually)
    # Simple 'H' or 'L'
    # Since we don't know if font is available, just simple lines
    # Home: Triangle roof, square body
    # Learn: Rectangle book
    
    cx, cy = 40.5, 40.5
    
    if 'home' in filename:
        # Draw House
        # Roof
        draw.polygon([(cx, 15), (15, 40), (66, 40)], fill=color if 'active' in filename else None, outline=color)
        # Body
        body_rect = [25, 40, 56, 70]
        if 'active' in filename:
            draw.rectangle(body_rect, fill=color, outline=color)
        else:
             draw.rectangle(body_rect, fill=None, outline=color, width=3)
             
    elif 'learn' in filename:
        # Draw Book
        # Rect
        rect = [20, 25, 61, 65]
        if 'active' in filename:
            draw.rectangle(rect, fill=color, outline=color)
        else:
            draw.rectangle(rect, fill=None, outline=color, width=3)
    
    os.makedirs('src/assets', exist_ok=True)
    img.save(f'src/assets/{filename}')
    print(f"Created src/assets/{filename}")

# Colors
GRAY = "#8b949e"
PRIMARY = "#13ec6d"

create_icon('home.png', GRAY, 'H')
create_icon('home_active.png', PRIMARY, 'H')
create_icon('learn.png', GRAY, 'L')
create_icon('learn_active.png', PRIMARY, 'L')
create_icon('history.png', GRAY, 'Hi')
create_icon('history_active.png', PRIMARY, 'Hi')
create_icon('settings.png', GRAY, 'S')
create_icon('settings_active.png', PRIMARY, 'S')
