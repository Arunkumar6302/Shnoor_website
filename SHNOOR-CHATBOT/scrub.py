import os

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    modified = False
    for line in lines:
        stripped = line.lstrip()
        if filepath.endswith('.py'):
            if stripped.startswith('#') and not stripped.startswith('#!'):
                modified = True
                continue
        elif filepath.endswith(('.js', '.jsx', '.css')):
            if stripped.startswith('//'):
                modified = True
                continue
            if stripped.startswith('/*') and stripped.endswith('*/\n'):
                modified = True
                continue
        
        new_lines.append(line)
        
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f'Cleaned {filepath}')

def main():
    root_dirs = ['backend', 'frontend/src']
    for root_dir in root_dirs:
        for dirpath, _, filenames in os.walk(root_dir):
            if 'node_modules' in dirpath or 'venv' in dirpath:
                continue
            for file in filenames:
                if file.endswith(('.py', '.js', '.jsx', '.css')):
                    filepath = os.path.join(dirpath, file)
                    try:
                        process_file(filepath)
                    except Exception as e:
                        pass

if __name__ == '__main__':
    main()
