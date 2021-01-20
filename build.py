import os


def main():
    if os.path.exists('README.md'):
        os.remove('README.md')
    readme = open('README.md', 'x')
    template = open('template.md', 'r')
    for line in template:
        if line.endswith('.html\n'):
            readme.write(loadHTML(line[:-1]))
        else:
            readme.write(line)


def loadHTML(file):
    html = open(file, 'r')
    return f"```html\n{html.read()}```\n[{file}]({file})\n"


if __name__ == "__main__":
    main()
