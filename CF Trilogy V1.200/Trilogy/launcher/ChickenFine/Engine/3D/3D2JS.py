import numpy as np

def parse_obj(file_path):
    vertices = []
    faces = []
    
    # Открываем файл .obj
    with open(file_path, 'r') as file:
        for line in file:
            if line.startswith('v '):
                parts = line.split()
                x, y, z = map(float, parts[1:4])
                vertices.append((x, y, z))
            
            elif line.startswith('f '):
                parts = line.split()
                face = [int(p.split('/')[0]) - 1 for p in parts[1:]]  # Индексы начинаются с 1, в Python с 0
                faces.append(face)
    
    vertices = np.array(vertices)

    polygons = []
    for face in faces:
        polygon = []
        for vertex_idx in face:
            x, y, z = vertices[vertex_idx]
            polygon.append({"x": x, "y": y, "z": z})
        polygons.append(polygon)
    
    return polygons

def save_as_js(polygons, output_path):
    js_content = f"const polygons = {polygons};\n"
    
    with open(output_path, 'w') as file:
        file.write(js_content)

file_path = 'model.obj'  # Укажите путь к вашему OBJ файлу
polygons = parse_obj(file_path)

output_js_path = 'model.js'
save_as_js(polygons, output_js_path)

print(f"Model saved! {output_js_path}")
