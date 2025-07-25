import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [frameWidth, setFrameWidth] = useState('');
  const [frameHeight, setFrameHeight] = useState('');
  const [frameMaterial, setFrameMaterial] = useState('');
  const [frameStyle, setFrameStyle] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const width = parseFloat(frameWidth) || 0;
    const height = parseFloat(frameHeight) || 0;
    const area = width * height;
    
    const materialPrices = {
      'wood': 800,
      'metal': 1200,
      'plastic': 400,
      'premium': 1800
    };
    
    const stylePrices = {
      'classic': 0,
      'modern': 300,
      'vintage': 500,
      'custom': 800
    };
    
    const basePrice = materialPrices[frameMaterial as keyof typeof materialPrices] || 0;
    const stylePrice = stylePrices[frameStyle as keyof typeof stylePrices] || 0;
    const areaPrice = area * 50;
    
    setTotalPrice(basePrice + stylePrice + areaPrice);
  };

  const standardSizes = [
    { name: 'Балетка 30x40', width: 30, height: 40, price: 2500 },
    { name: 'Стандарт 40x50', width: 40, height: 50, price: 3200 },
    { name: 'Большая 50x70', width: 50, height: 70, price: 4800 },
    { name: 'Премиум 60x80', width: 60, height: 80, price: 6400 }
  ];

  const galleryImages = [
    { 
      id: 1, 
      title: 'Классическая балетная рамка', 
      material: 'Дерево', 
      size: '40x50',
      image: '/img/72b18787-613f-4ccc-8b59-9db3710059e9.jpg'
    },
    { 
      id: 2, 
      title: 'Современная металлическая', 
      material: 'Металл', 
      size: '50x70',
      image: '/img/f1ab03a4-9281-4da0-9fb5-37fe4e275b98.jpg'
    },
    { 
      id: 3, 
      title: 'Винтажная рамка', 
      material: 'Дерево', 
      size: '30x40',
      image: '/img/53e7e5b7-b2b4-45c9-912d-6621c849a660.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ballet-cream via-white to-ballet-cream">
      {/* Header */}
      <header className="border-b border-ballet-pink/20 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ballet-pink rounded-full flex items-center justify-center">
                <Icon name="Frame" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-ballet-black">Ballet Frames</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#calculator" className="text-ballet-black hover:text-ballet-pink transition-colors">
                Калькулятор
              </a>
              <a href="#gallery" className="text-ballet-black hover:text-ballet-pink transition-colors">
                Галерея
              </a>
              <a href="#pricing" className="text-ballet-black hover:text-ballet-pink transition-colors">
                Прайс
              </a>
              <a href="#contacts" className="text-ballet-black hover:text-ballet-pink transition-colors">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-ballet-black mb-6">
            Рамки для балетных фотографий
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создайте идеальную рамку для ваших балетных воспоминаний. 
            Элегантность и изящество в каждой детали.
          </p>
          <Button size="lg" className="bg-ballet-pink hover:bg-ballet-pink/90">
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать стоимость
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Icon name="Calculator" size={16} />
              Калькулятор
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Icon name="Images" size={16} />
              Галерея
            </TabsTrigger>
            <TabsTrigger value="pricing" className="flex items-center gap-2">
              <Icon name="DollarSign" size={16} />
              Прайс
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              Контакты
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab */}
          <TabsContent value="calculator" id="calculator">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calculator Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-ballet-pink/20">
                  <CardHeader className="bg-gradient-to-r from-ballet-pink to-ballet-pink/80 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Frame" size={24} />
                      Калькулятор балетных рамок
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="width">Ширина (см)</Label>
                        <Input
                          id="width"
                          type="number"
                          value={frameWidth}
                          onChange={(e) => setFrameWidth(e.target.value)}
                          placeholder="30"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="height">Высота (см)</Label>
                        <Input
                          id="height"
                          type="number"
                          value={frameHeight}
                          onChange={(e) => setFrameHeight(e.target.value)}
                          placeholder="40"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Материал</Label>
                        <Select value={frameMaterial} onValueChange={setFrameMaterial}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Выберите материал" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wood">Дерево (классика)</SelectItem>
                            <SelectItem value="metal">Металл (современный)</SelectItem>
                            <SelectItem value="plastic">Пластик (эконом)</SelectItem>
                            <SelectItem value="premium">Премиум (эксклюзив)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Стиль</Label>
                        <Select value={frameStyle} onValueChange={setFrameStyle}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Выберите стиль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="classic">Классический</SelectItem>
                            <SelectItem value="modern">Современный</SelectItem>
                            <SelectItem value="vintage">Винтажный</SelectItem>
                            <SelectItem value="custom">Индивидуальный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button 
                      onClick={calculatePrice} 
                      className="w-full bg-ballet-gold text-ballet-black hover:bg-ballet-gold/90"
                      size="lg"
                    >
                      <Icon name="Calculator" className="mr-2" size={20} />
                      Рассчитать стоимость
                    </Button>

                    {totalPrice > 0 && (
                      <div className="bg-ballet-cream p-4 rounded-lg border border-ballet-gold">
                        <h3 className="text-lg font-semibold text-ballet-black mb-2">
                          Расчет стоимости
                        </h3>
                        <div className="text-2xl font-bold text-ballet-pink">
                          {totalPrice.toLocaleString('ru-RU')} ₽
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Standard Sizes */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-ballet-black">Стандартные размеры</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {standardSizes.map((size, index) => (
                      <div 
                        key={index}
                        className="p-4 border border-ballet-pink/20 rounded-lg hover:bg-ballet-cream/50 transition-colors cursor-pointer"
                        onClick={() => {
                          setFrameWidth(size.width.toString());
                          setFrameHeight(size.height.toString());
                        }}
                      >
                        <h4 className="font-semibold text-ballet-black">{size.name}</h4>
                        <p className="text-sm text-gray-600">{size.width}×{size.height} см</p>
                        <Badge variant="secondary" className="mt-2">
                          от {size.price.toLocaleString('ru-RU')} ₽
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" id="gallery">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-ballet-black flex items-center gap-2">
                  <Icon name="Images" size={24} />
                  Галерея работ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((image) => (
                    <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/5] bg-gradient-to-br from-ballet-cream to-ballet-pink/20 overflow-hidden">
                        <img 
                          src={image.image} 
                          alt={image.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-ballet-black">{image.title}</h3>
                        <p className="text-sm text-gray-600">{image.material} • {image.size} см</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" id="pricing">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-ballet-black">Эконом</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-ballet-pink">от 1,500₽</div>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Пластиковая рамка</li>
                    <li>✓ Стандартные размеры</li>
                    <li>✓ Базовая обработка</li>
                  </ul>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-ballet-pink">
                <CardHeader className="text-center">
                  <CardTitle className="text-ballet-black">Классик</CardTitle>
                  <Badge className="bg-ballet-pink">Популярный</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-ballet-pink">от 3,000₽</div>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Деревянная рамка</li>
                    <li>✓ Любые размеры</li>
                    <li>✓ Профессиональная обработка</li>
                    <li>✓ Выбор цвета</li>
                  </ul>
                  <Button className="w-full bg-ballet-pink hover:bg-ballet-pink/90">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-ballet-black">Премиум</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-ballet-pink">от 5,500₽</div>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Элитные материалы</li>
                    <li>✓ Индивидуальный дизайн</li>
                    <li>✓ Позолоченные элементы</li>
                    <li>✓ Гравировка</li>
                    <li>✓ Подарочная упаковка</li>
                  </ul>
                  <Button variant="outline" className="w-full">Заказать</Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gradient-to-br from-ballet-gold/10 to-ballet-gold/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-ballet-black">Эксклюзив</CardTitle>
                  <Badge variant="secondary">VIP</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-ballet-pink">от 12,000₽</div>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Ручная работа мастера</li>
                    <li>✓ Эксклюзивные материалы</li>
                    <li>✓ Авторский дизайн</li>
                    <li>✓ Сертификат подлинности</li>
                    <li>✓ Персональная консультация</li>
                  </ul>
                  <Button className="w-full bg-ballet-gold text-ballet-black hover:bg-ballet-gold/90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" id="contacts">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ballet-black flex items-center gap-2">
                    <Icon name="Phone" size={24} />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-ballet-pink" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-ballet-pink" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@balletframes.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-ballet-pink" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">Москва, ул. Балетная, 15</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-ballet-pink" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-ballet-black">Инструкция по заказу</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-ballet-pink text-white shrink-0">1</Badge>
                      <div>
                        <h4 className="font-semibold">Выберите размер</h4>
                        <p className="text-sm text-gray-600">
                          Используйте калькулятор или выберите стандартный размер
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-ballet-pink text-white shrink-0">2</Badge>
                      <div>
                        <h4 className="font-semibold">Выберите материал</h4>
                        <p className="text-sm text-gray-600">
                          Дерево, металл или премиум материалы
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-ballet-pink text-white shrink-0">3</Badge>
                      <div>
                        <h4 className="font-semibold">Оформите заказ</h4>
                        <p className="text-sm text-gray-600">
                          Свяжитесь с нами по телефону или email
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge className="bg-ballet-pink text-white shrink-0">4</Badge>
                      <div>
                        <h4 className="font-semibold">Получите готовую рамку</h4>
                        <p className="text-sm text-gray-600">
                          Срок изготовления: 3-7 рабочих дней
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-ballet-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-ballet-pink rounded-full flex items-center justify-center">
              <Icon name="Frame" className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-bold">Ballet Frames</h3>
          </div>
          <p className="text-gray-400">
            Элегантные рамки для ваших балетных воспоминаний
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © 2024 Ballet Frames. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;