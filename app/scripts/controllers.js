/*globals angular*/

(function (angular) {
  'use strict';

  var module = angular.module('canvsTest');

  module.controller('NavPatternCtrl', [
    '$scope', '$famous', '$timeout',
    function ($scope, $famous, $timeout) {
      var NavPatternCtrl = {};

      NavPatternCtrl.EventHandler = $famous['famous/core/EventHandler'];
      NavPatternCtrl.Transitionable = $famous['famous/transitions/Transitionable'];

      $scope.eventHandler = NavPatternCtrl.EventHandler();

      $scope.menuOpen = false;
      $scope.surfaceWidth = 60;
      $scope.surfaceHeight = 60;

      NavPatternCtrl.menuItems = [
        {
          _id: 0,
          name: 'Menu Item 0',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 250,
          transYValue: 25
        },
        {
          _id: 1,
          name: 'Menu Item 1',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 150,
          transYValue: 25
        },
        {
          _id: 2,
          name: 'Menu Item 2',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 225,
          transYValue: 150
        },
        {
          _id: 3,
          name: 'Menu Item 3',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 125,
          transYValue: 100
        },
        {
          _id: 4,
          name: 'Menu Item 4',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 75,
          transYValue: 250
        },
        {
          _id: 5,
          name: 'Menu Item 5',
          transX: new NavPatternCtrl.Transitionable(0),
          transY: new NavPatternCtrl.Transitionable(0),
          transXValue: 50,
          transYValue: 150
        }
      ];

      $scope.openMenu = function () {
        if (!$scope.menuOpen) {
          $scope.menuItems = NavPatternCtrl.menuItems;
          $scope.menuOpen = true;

          $scope.surfaceHeight = 300;
          $scope.surfaceWidth = 300;
        } else {
          $scope.menuItems = [];
          $scope.menuOpen = false;

          $timeout(function () {
            $scope.surfaceHeight = 60;
            $scope.surfaceWidth = 60;
          }, 500);
        }

      };

      $scope.openMenuItem = function (item) {
        $scope.openMenu();
      };

      $scope.menuItemEnter = function (item) {
        item.transX.set(item.transXValue, {duration: 500, curve: 'easeOut'});
        item.transY.set(item.transYValue, {duration: 500, curve: 'easeOut'});
        return 500;
      };

      $scope.menuItemLeave = function (item) {
        item.transX.set(0, {duration: 500, curve: 'easeIn'});
        item.transY.set(0, {duration: 500, curve: 'easeIn'});
        return 500;
      };
    }
  ]);

  module.controller('DragTestCtrl', [
    '$scope', '$famous',
    function ($scope, $famous) {
      var DragTestCtrl = {};

      DragTestCtrl.EventHandler = $famous['famous/core/EventHandler'];
      DragTestCtrl.Transitionable = $famous['famous/transitions/Transitionable'];
      DragTestCtrl.Draggable = $famous['famous/modifiers/Draggable'];

      DragTestCtrl.people = [
        {
          _id: 0,
          name: 'Eddard Stark',
          picture: '../images/people/eddard.jpg',
          position: [10, 10],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([10, 10, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 1,
          name: 'Tyrion Lanister',
          picture: '../images/people/tyrion.jpg',
          position: [95, 10],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([95, 10, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 2,
          name: 'Arya Stark',
          picture: '../images/people/arya.png',
          position: [190, 10],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([190, 10, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 3,
          name: 'Catelyn Stark',
          picture: '../images/people/catelyn.jpg',
          position: [285, 10],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([285, 10, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 4,
          name: 'Jaime Lanister',
          picture: '../images/people/jaime.jpeg',
          position: [10, 95],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([10, 95, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 5,
          name: 'Jon Snow',
          picture: '../images/people/jon.jpg',
          position: [95, 95],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([95, 95, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 6,
          name: 'Jorah Mormount',
          picture: '../images/people/jorah.jpg',
          position: [190, 95],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([190, 95, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 7,
          name: 'Petyr Baelish',
          picture: '../images/people/petyr.jpg',
          position: [285, 95],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([285, 95, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 8,
          name: 'Robert Baratheon',
          picture: '../images/people/robert.jpg',
          position: [10, 190],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([10, 190, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 9,
          name: 'Sansa Stark',
          picture: '../images/people/sansa.png',
          position: [95, 190],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([95, 190, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 10,
          name: 'Tywin Lanister',
          picture: '../images/people/tywin.png',
          position: [190, 190],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([190, 190, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
        {
          _id: 11,
          name: 'Varys',
          picture: '../images/people/varys.jpg',
          position: [285, 190],
          handler: new DragTestCtrl.EventHandler(),
          trans: new DragTestCtrl.Transitionable([285, 190, 1]),
          draggable: new DragTestCtrl.Draggable()
        },
      ];

      DragTestCtrl.overDropZone = function ($event) {
        var zoneIndex, position, eventX, eventY,
            targetPosition = $($event.currentTarget).position(),
            itemWidth = 75;

        for (zoneIndex = $scope.dropZones.length - 1; zoneIndex >= 0; zoneIndex -= 1) {
          position = $scope.dropZones[zoneIndex].position;
          eventX = targetPosition.left;
          eventY = targetPosition.top;
          if (eventX > position.left && (eventX - itemWidth) < position.right && eventY > position.top && eventY < position.bottom) {
            return $scope.dropZones[zoneIndex];
          }
        }

        return false;
      };

      DragTestCtrl.nextPosition = function (dropZone) {
        var tileSize = 75,
            margin = 10,
            x = 10,
            y = 10,
            position = dropZone.people.length;

        if (position % dropZone.columns > 0) {
          x += ((position % dropZone.columns) - 1) * (tileSize + margin);
        } else {
          x += (dropZone.columns - 1) * (tileSize + margin);
        }

        if (position > dropZone.columns) {
          y += (Math.ceil(position / dropZone.columns) - 1) * (tileSize + margin);
        }

        return [x, y];
      };

      $scope.peopleInTray = DragTestCtrl.people;

      $scope.dropZones = [
        {
          _id: 0,
          columns: 4,
          rows: 2,
          people: [],
          position: {}
        },
        {
          _id: 1,
          columns: 3,
          rows: 2,
          people: [],
          position: {}
        },
        {
          _id: 2,
          columns: 2,
          rows: 1,
          people: [],
          position: {}
        }
      ];

      $scope.addBorder = function (person) {
        person.selected = true;
      };

      $scope.dragRelease = function ($event, item) {
        var x, y, dropZone = DragTestCtrl.overDropZone($event),
            targetPosition = $($event.currentTarget).position(),
            itemWidth = 75;
        item.selected = false;

        if (dropZone && dropZone.people.length <= (dropZone.columns * dropZone.rows)) {
          dropZone.people.push(item);
          item.position = DragTestCtrl.nextPosition(dropZone);
          item.position[0] += dropZone.position.left;
          item.position[1] += dropZone.position.top;
        }

        x = (item.trans.get()[0] - (targetPosition.left)) + item.position[0];
        y = (item.trans.get()[1] - (targetPosition.top)) + item.position[1];
        item.trans.set(
            [x, y, 1],
            {duration: 500, curve: 'easeOut'},
            function () {
              item.trans.reset([10,10]);
            }
        );

      };
    }
  ]);

  module.controller('BoardTestCtrl', [
    '$scope', '$famous', '$timeout',
    function ($scope, $famous, $timeout) {
      var BoardTestCtrl = {};

      BoardTestCtrl.EventHandler = $famous['famous/core/EventHandler'];
      BoardTestCtrl.Transitionable = $famous['famous/transitions/Transitionable'];

      BoardTestCtrl.cardWidth = 0;

      $scope.columnCounts = [];
      $scope.columnLayoutOptions = {
        dimensions: [3,1]
      };
      $scope.scrollOffset = [
          0, 0, 0
      ];

      $scope.scrollOptions = {
        speedLimit: 5,
        size: [200, 400]
      };

      $scope.eventHandler = new BoardTestCtrl.EventHandler();

      $scope.columnHandlers = [
          new BoardTestCtrl.EventHandler(),
          new BoardTestCtrl.EventHandler(),
          new BoardTestCtrl.EventHandler()
      ]

      $scope.getCardSize = function () {
        var width = angular.element('.card-column').width() - 30,
            height = 150;

        BoardTestCtrl.cardWidth = width;
        return [width, height];
      };

      BoardTestCtrl.getCardPosition = function (column, index) {
        var cardSize = $scope.getCardSize(),
            xPos = (column  * cardSize[0]) + ((column + 1) * 30) + (30 * column),
            yPos = (index * cardSize[1]) + ((index + 1) * 15) + 80;

        return [xPos, 0, 1];
      };

      BoardTestCtrl.overColumn = function ($event, card) {
        var zoneIndex, position, eventX, eventY,
            targetPosition = $($event.currentTarget).position(),
            cardWidth = BoardTestCtrl.cardWidth;

        for (zoneIndex = $scope.columns.length - 1; zoneIndex >= 0; zoneIndex -= 1) {
          position = $scope.columns[zoneIndex].position;
          eventX = targetPosition.left;
          eventY = targetPosition.top;

          if (eventX > position.left && (eventX - cardWidth) < position.right && eventY > position.top && eventY < position.bottom) {
            return zoneIndex;
          }
        }
      };

      BoardTestCtrl.getColumnById = function (columnId) {
        var columnIndex;

        for (columnIndex = $scope.columns.length - 1; columnIndex >= 0; columnIndex -= 1) {
          if ($scope.columns[columnIndex]._id === columnId) {
            return $scope.columns[columnIndex];
          }
        }
      };

      $scope.getColumnCards = function (column) {
        var cards = [],
            cardIndex;

        for (cardIndex = $scope.cards.length - 1; cardIndex >= 0; cardIndex -= 1) {
          if ($scope.cards[cardIndex].column === column._id) {
            cards.push($scope.cards[cardIndex]);
          }
        }

        cards.sort(function (a, b) {
          return a.index - b.index;
        });

        return cards;
      };

      BoardTestCtrl.moveOtherCards = function (column, moveCard) {
        var cards = $scope.getColumnCards(column),
            cardIndex, cardLength = cards.length;

        for (cardIndex = moveCard.index + 1; cardIndex < cardLength; cardIndex += 1) {
          cards[cardIndex].index -= 1;
          cards[cardIndex].position = BoardTestCtrl.getCardPosition(column.index, cards[cardIndex].index);

          cards[cardIndex].trans.set(
              [
                cards[cardIndex].position[0],
                cards[cardIndex].position[1],
                1
              ],
              {duration: 500, curve: 'easeOut'}
          )
        }
      };

      $scope.pickupCard = function (card) {
        card.selected = true;
        card.trans.set([card.trans.get()[0], card.trans.get()[1], 2]);
        card.handler = card.cardHandler;
      };

      $scope.dropCard = function ($event, card) {
        var x, y, targetPosition = $($event.currentTarget).position(),
            columnIndex = BoardTestCtrl.overColumn($event, card),
            column, oldColumn;

        card.selected = false;

        if (columnIndex || columnIndex === 0) {
          column = $scope.columns[columnIndex];
          oldColumn = BoardTestCtrl.getColumnById(card.column);

          card.position = BoardTestCtrl.getCardPosition(columnIndex, $scope.columnCounts[column.index]);
          BoardTestCtrl.moveOtherCards(oldColumn, card);

          card.column = column._id;
          card.index = $scope.columnCounts[column.index];
          $scope.columnCounts[column.index] += 1;
          $scope.columnCounts[oldColumn.index] -= 1;

        }

        x = (card.trans.get()[0] - (targetPosition.left)) + card.position[0];
        y = (card.trans.get()[1] - (targetPosition.top)) + card.position[1];
        /*card.trans.set(
            [x, y, 1],
            {duration: 500, curve: 'easeOut'}
        );*/
        card.handler = $scope.columnHandlers[card.column];
      };

      /*$scope.$watchCollection('scrollOffset', function (newOffset, oldOffset) {
        var cards = $scope.getColumnCards($scope.columns[2]),
            cardIndex,
            trans;

        for (cardIndex = cards.length - 1; cardIndex >=0; cardIndex -= 1) {
          trans = cards[cardIndex].trans.get();
          cards[cardIndex].trans.set([trans[0], trans[1] - (newOffset[2] - oldOffset[2]), trans[2]])
        }
      });*/

      // Columns
      $scope.columns = [
        {
          _id: '0',
          name: 'To Do',
          index: 0,
          position: {}
        },
        {
          _id: '1',
          name: 'In Progress',
          index: 1,
          position: {}
        },
        {
          _id: '2',
          name: 'Done',
          index: 2,
          position: {}
        }
      ];

      $scope.cards = [
        {
          _id: '1',
          column: '0',
          index: 0,
          title: 'Test Title 1',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[0],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '2',
          column: '0',
          index: 1,
          title: 'Test Title 2',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[0],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '3',
          column: '0',
          index: 2,
          title: 'Test Title 3',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[0],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '4',
          column: '0',
          index: 3,
          title: 'Test Title 4',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[0],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '5',
          column: '1',
          index: 0,
          title: 'Test Title 5',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[1],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '6',
          column: '1',
          index: 1,
          title: 'Test Title 6',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[1],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '7',
          column: '2',
          index: 0,
          title: 'Test Title 7',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '8',
          column: '2',
          index: 1,
          title: 'Test Title 8',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '9',
          column: '2',
          index: 2,
          title: 'Test Title 9',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '10',
          column: '2',
          index: 3,
          title: 'Test Title 10',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '11',
          column: '2',
          index: 4,
          title: 'Test Title 11',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '12',
          column: '2',
          index: 5,
          title: 'Test Title 12',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '13',
          column: '2',
          index: 6,
          title: 'Test Title 13',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '14',
          column: '2',
          index: 7,
          title: 'Test Title 14',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        },
        {
          _id: '15',
          column: '2',
          index: 8,
          title: 'Test Title 15',
          description: "Then throw her in the laundry room, which will hereafter be referred to as \"the brig\". Professor, make a woman out of me. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! Ooh, name it after me! Shut up and take my money! Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.",
          handler: $scope.columnHandlers[2],
          cardHandler: new BoardTestCtrl.EventHandler(),
          trans: new BoardTestCtrl.Transitionable([0, 0, 1])
        }
      ]

      // Populate Cards
      $timeout(function () {
        var column,
            cardIndex;

        for (cardIndex = 0; cardIndex < $scope.cards.length; cardIndex += 1) {
          column = BoardTestCtrl.getColumnById($scope.cards[cardIndex].column);
          $scope.cards[cardIndex].position = BoardTestCtrl.getCardPosition(column.index, $scope.cards[cardIndex].index);
          $scope.cards[cardIndex].trans =
              new BoardTestCtrl.Transitionable($scope.cards[cardIndex].position);
          $scope.cards[cardIndex].show = true;

          if ($scope.columnCounts[column.index]) {
            $scope.columnCounts[column.index] += 1
          } else {
            $scope.columnCounts[column.index] = 1;
          }
        }
      }, 1000);

    }
  ]);

  module.controller('TaskBoardCtrl', [
    '$scope', '$famous',
    function ($scope, $famous) {
      var TaskBoardCtrl = {};

      TaskBoardCtrl.EventHandler = $famous['famous/core/EventHandler'];

      $scope.eventHandler = new TaskBoardCtrl.EventHandler();
      $scope.columnLayoutOptions = {
        dimensions: [3,1]
      };
      $scope.columns = [
        {
          _id: '0',
          name: 'To Do',
          index: 0,
          position: {}
        },
        {
          _id: '1',
          name: 'In Progress',
          index: 1,
          position: {}
        },
        {
          _id: '2',
          name: 'Done',
          index: 2,
          position: {}
        }
      ];
    }
  ]);

}(angular));