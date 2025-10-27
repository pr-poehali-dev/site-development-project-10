import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services = [
    {
      icon: 'Briefcase',
      title: 'Консалтинг',
      description: 'Профессиональная консультация по вопросам бизнеса и стратегии развития'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика',
      description: 'Глубокий анализ данных и рынка для принятия обоснованных решений'
    },
    {
      icon: 'Users',
      title: 'Обучение',
      description: 'Корпоративные тренинги и семинары для повышения квалификации команды'
    },
    {
      icon: 'Settings',
      title: 'Автоматизация',
      description: 'Оптимизация бизнес-процессов и внедрение современных решений'
    }
  ];

  const prices = [
    {
      name: 'Базовый',
      price: '50 000 ₽',
      period: 'месяц',
      features: ['Консультации 2 раза в неделю', 'Email поддержка', 'Базовая аналитика', 'Доступ к материалам']
    },
    {
      name: 'Профессиональный',
      price: '120 000 ₽',
      period: 'месяц',
      features: ['Консультации без ограничений', 'Приоритетная поддержка 24/7', 'Расширенная аналитика', 'Персональный менеджер', 'Доступ ко всем материалам'],
      popular: true
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      features: ['Индивидуальные условия', 'Полное сопровождение', 'Выделенная команда экспертов', 'Кастомные решения', 'SLA гарантии']
    }
  ];

  const reviews = [
    {
      name: 'Алексей Иванов',
      position: 'CEO, TechCorp',
      avatar: 'AI',
      text: 'Профессиональный подход и глубокая экспертиза помогли нам увеличить эффективность на 40%. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      position: 'Директор по развитию, InnoGroup',
      avatar: 'МП',
      text: 'Отличная команда специалистов. Быстро решили наши задачи и предложили дополнительные улучшения.',
      rating: 5
    },
    {
      name: 'Дмитрий Смирнов',
      position: 'Основатель, StartupLab',
      avatar: 'ДС',
      text: 'Сотрудничаем уже второй год. Качество услуг стабильно высокое, всегда идут навстречу.',
      rating: 5
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">БизнесПро</div>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-accent transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-accent transition-colors">Цены</a>
            <a href="#reviews" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button>Связаться</Button>
        </div>
      </header>

      <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Профессиональные решения для вашего бизнеса
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Помогаем компаниям достигать целей через эффективные стратегии и современные технологии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексный подход к решению задач любой сложности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите оптимальный план для вашей компании
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-accent shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Что говорят о нас наши партнёры
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-accent text-accent-foreground">{review.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-12">
              Заполните форму, и мы свяжемся с вами для обсуждения вашего проекта
            </p>
            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="example@company.ru" 
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input 
                        id="company" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Название компании" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о вашем проекте или задаче..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">БизнесПро</div>
              <p className="text-primary-foreground/80">Профессиональные решения для вашего бизнеса</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Консалтинг</li>
                <li>Аналитика</li>
                <li>Обучение</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  info@biznespro.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 БизнесПро. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-50"
      >
        {isChatOpen ? <Icon name="X" className="w-6 h-6" /> : <Icon name="MessageCircle" className="w-6 h-6" />}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-card border border-border rounded-lg shadow-2xl z-50 animate-scale-in">
          <div className="bg-accent text-accent-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Онлайн-консультант</h3>
            <p className="text-sm text-accent-foreground/90">Мы онлайн и готовы помочь</p>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-secondary/20">
            <div className="bg-card p-3 rounded-lg mb-2 max-w-[80%]">
              <p className="text-sm">Здравствуйте! Чем могу помочь?</p>
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите сообщение..."
                className="resize-none h-10 min-h-10"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button onClick={handleSendMessage} size="icon">
                <Icon name="Send" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;