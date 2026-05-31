# pending
# import asyncio

def recursividad(n: int) -> int:
    if n <= 1:
        return 1
    else:
        return n * recursividad(n - 1)

if __name__ == "__main__":
    print('Recursividad.')
    print(recursividad(6))