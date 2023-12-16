# Spaceship 飞船

说明：飞船用以承载[机器人](Dev)一起移动

## 属性

### `x -> int`

**只读**，飞船的`x`坐标

### `y -> int`

**只读**，飞船的`y`坐标

## 方法

### `step(n) -> void`

飞船前进或后退指定步数，**本操作算作`n`步**

-   `n`: 正整数，前进的步数

### `turnLeft() -> void`

飞船原地左转，机器人朝向不变，**本操作算作`1`步**

### `turnRight() -> void`

飞船原地右转，机器人朝向不变，**本操作算作`1`步**

## 示例用法

```python
# 获取飞船当前的x坐标
x = Spaceship.x
# 获取飞船当前的y坐标
y = Spaceship.y

# 飞船原地右转
Spaceship.turnRight()
# 飞船前进2步
Spaceship.step(2)
# 飞船原地左转
Spaceship.turnLeft()
# 飞船前进3步
Spaceship.step(3)
```
